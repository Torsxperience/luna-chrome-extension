export function setOptionLocal(option) {
    performSanityChecks();
    return new Promise((resolve, _) => {
        chrome.storage.sync.set(option, () => resolve());
    });
}

export function getOptionLocal(key) {
    performSanityChecks();
    return new Promise((resolve, _) => {
        chrome.storage.sync.get(key, () => resolve(key));
    })
}

function performSanityChecks() {
    if (!chrome) {
        throw new Error("This  function can only be called from an extension context");
    }
    if (!chrome.storage) {
        throw new Error("Unable to read storage object. Make sure `storage` permission was added to extension manifest")
    }
}