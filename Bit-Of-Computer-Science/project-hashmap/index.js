function createHashMap() {
  const loadFactor = 0.75;
  let capacity = 16;
  
  const pairToStr = ({key, value}) => `${key} - ${value}`;
  let buckets = Array.from({ length: capacity }, () => createLinkedList(pairToStr));
  let keysCount = 0; // Track the number of unique key-value pairs
  
  function hash(key, currentCapacity) { 
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % currentCapacity;
    }
    return hashCode;
  }
  
  function resize() {
    let newBuckets = Array.from({ length: 2 * capacity }, () => createLinkedList(pairToStr));
    const newCapacity = newBuckets.length; 

    buckets.forEach((bucket) => {
      let currentNode = bucket.getHead();
      while (currentNode !== null) {
        const { key, value } = currentNode.value; 
        const newIndex = hash(key, newCapacity); 
        newBuckets[newIndex].append({ key, value });
        
        currentNode = currentNode.next;
      }
    });
    
    // Update
    buckets = newBuckets;
    capacity = newCapacity;
  }
  
  function set(key, value) {
    if (keysCount + (!has(key)) > loadFactor * capacity) {
      console.log('Resizing...')
      resize();
    }
    
    const index = hash(key, capacity); 
    const bucketList = buckets[index];

    let currentNode = bucketList.find({ key, value });
    if (currentNode !== null) { // Found existing key
      currentNode.value.value = value;
    }
    else { // Key not found, proceed to add
      bucketList.append({ key, value });
      keysCount++; 
    }
  }
  
  function get(key) {
    const bucket = buckets[hash(key, capacity)];
    let currentNode = bucket.getHead();
    
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        return currentNode.value.value;
      }
      currentNode = currentNode.next;
    }
    
    return null;
  }
  
  function has(key) {
    const bucket = buckets[hash(key, capacity)];
    let currentNode = bucket.getHead();
    
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        return true;
      }
      currentNode = currentNode.next;
    }
    
    return false;
  }
  
  function remove(key) {
    const bucket = buckets[hash(key, capacity)];
    let currentNode = bucket.getHead();
    let index = 0;
    
    while (currentNode !== null) {
      if (currentNode.value.key === key) {
        bucket.removeAt(index);
        keysCount--;
        return true;
      }
      
      index++;
      currentNode = currentNode.next;
    }
    
    return false;
  }
  
  function length() {
    return keysCount;
  }
  
  function clear() {
    capacity = 16;
    buckets = Array.from({ length: capacity }, () => createLinkedList(pairToStr));
  }
  
  function keys() {
    return buckets.reduce(function(accum, bucket) {
      let currentNode = bucket.getHead();
      
      while (currentNode !== null) {
        accum.push(currentNode.value.key);
        currentNode = currentNode.next;
      }
      
      return accum;
    }, [])
  }
  
  function values() {
    return buckets.reduce(function(accum, bucket) {
      let currentNode = bucket.getHead();
      
      while (currentNode !== null) {
        accum.push(currentNode.value.value);
        currentNode = currentNode.next;
      }
      
      return accum;
    }, [])
  }
  
  function entries() {
    return buckets.reduce(function(accum, bucket) {
      let currentNode = bucket.getHead();
      
      while (currentNode !== null) {
        accum.push([ currentNode.value.key, currentNode.value.value ]);
        currentNode = currentNode.next;
      }
      
      return accum;
    }, [])
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    getCapacity: () => capacity,
  }
}
