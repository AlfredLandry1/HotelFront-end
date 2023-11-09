/**
 *
 * @param {string} storageKey - identifi la cle de la valeur a retirer dans le local storage
 * @param {number} timeOut - preccise le temps avant suppresion de la clee
 */

function ClearStorage(storageKey, timeOut) {
  setTimeout(() => {
    localStorage.clear(storageKey);
  }, timeOut);
}

export default ClearStorage;
