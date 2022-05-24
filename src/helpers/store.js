import create from 'zustand'

const useStore = create(set => ({
    router: null,
    dom: null,
  })
);

export default useStore
