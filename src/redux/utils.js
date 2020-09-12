export const asyncLocalStorage = {
  setItem: async function (value) {
      await null;
      const serializedState = JSON.stringify(value)
      return localStorage.setItem('item', serializedState);
  },
  getItem: async function () {
      await null;
      const serializedState = localStorage.getItem('item')
      if (serializedState === null) { return undefined }
      return JSON.parse(serializedState)
  }
};

export function observeStore(store, select, onChange) {
  let currentState

  function handleChange() {
    let nextState = select(store.getState())
    if (nextState !== currentState) {
      currentState = nextState
      onChange({comments: currentState})
    }
  }
  
  let unsubscribe = store.subscribe(handleChange)
  handleChange()
  return unsubscribe
}
