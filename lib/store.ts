import { create } from 'zustand';

/**
 * MojoDocs Tool Orchestrator (Public State Definitions)
 * 
 * Manages the lifecycle of multiple local-first tools.
 * Actual middleware and side-effects are filtered in the community version.
 */

interface ToolState {
    activeTool: string | null;
    isProcessing: boolean;
    error: string | null;
    history: any[];

    // Actions
    setActiveTool: (id: string | null) => void;
    startProcessing: () => void;
    stopProcessing: () => void;
    clearHistory: () => void;
}

export const useToolsStore = create<ToolState>((set) => ({
    activeTool: null,
    isProcessing: false,
    error: null,
    history: [],

    setActiveTool: (id) => set({ activeTool: id }),
    startProcessing: () => set({ isProcessing: true }),
    stopProcessing: () => set({ isProcessing: false }),
    clearHistory: () => set({ history: [] }),
}));
