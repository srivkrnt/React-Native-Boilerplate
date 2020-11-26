import AsyncStorage from "@react-native-community/async-storage";

async function setItem(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}

async function getItem(key: string) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getAllItemKeys() {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    return keys;
  } catch (error) {
    console.log(error);
  }
}

async function removeItem(key: string) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
}

async function clearAll() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
}

export { setItem, getItem, getAllItemKeys, removeItem, clearAll };
