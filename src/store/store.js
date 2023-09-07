import { create } from "zustand";
import { componentsDetails } from "../assets/componentsDetails";

const initialState = {
  currentTab: "components",
  components: [],
  selectedComponent: {},
  filteredComponents: componentsDetails,
  showProperties: false,
};

const store = (set) => {
  const savedState = localStorage.getItem("storeState");
  const initialStoreState = savedState ? JSON.parse(savedState) : initialState;

  return {
    ...initialStoreState,

    setCurrentTab: (tab) => {
      set({ currentTab: tab });
    },

    setComponents: (component) => {
      set((state) => ({
        components: [...state.components, { ...component }],
      }));
    },

    setSelectedComponent: (component) => {
      set({ selectedComponent: component });
    },

    updateComponent: (componentId, updatedComponent) => {
      set((state) => ({
        components: state.components.map((component) => {
          if (component.i === componentId) {
            return { ...component, data: updatedComponent };
          }
          return component;
        }),
      }));
    },

    updateResizeDraggedComponent: (componentId, w, h, x, y) => {
      set((state) => ({
        components: state.components.map((component) => {
          if (component.i === componentId) {
            return {
              ...component,
              w: w,
              h: h,
              x: x,
              y: y,
            };
          }

          return component;
        }),
      }));
    },

    deleteComponent: (componentId) => {
      set((state) => ({
        components: state.components.filter(
          (component) => component.i !== componentId
        ),
      }));
    },

    setFilteredComponents: (filteredComponents) => {
      set({ filteredComponents: filteredComponents });
    },

    setShowProperties: (componentId, show) => {
      set((state) => ({
        components: state.components.map((component) => {
          if (component.i === componentId) {
            return { ...component, showProperties: show };
          }
          return component;
        }),
      }));
    },

    removeAllComponents: () => {
      set({ components: [] });

      localStorage.removeItem("storeState");
    },
  };
};

export const useStore = create(store);

useStore.subscribe((state) => {
  localStorage.setItem("storeState", JSON.stringify(state));
});
