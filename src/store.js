import { create } from 'zustand';

const useStore = create((set, get) => ({
    todos: [],
    filter: 'all',

    addTodo: (text) => set((state) => ({
        todos: [
            ...state.todos,
            {
                text,
                completed: false,
                color: ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#4b0082'][state.todos.length % 7],
            },
        ],
    })),

    toggleTodo: (index) => set((state) => {
        const updatedTodos = [...state.todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        return { todos: updatedTodos };
    }),

    deleteTodo: (index) => set((state) => ({
        todos: state.todos.filter((_, i) => i !== index),
    })),

    setFilter: (filter) => set({ filter }),

    filteredTodos: () => {
        const state = get(); // Get the current state directly
        if (state.filter === 'completed') return state.todos.filter(todo => todo.completed);
        if (state.filter === 'incomplete') return state.todos.filter(todo => !todo.completed);
        return state.todos; // 'all'
    },
}));

export default useStore;
