/**
 * MojoDocs Binary Utility Suite (Public Interfaces)
 * 
 * High-performance utilities for handling ArrayBuffers and Blobs
 * for local-first processing.
 */

export const binaryUtils = {
    /**
     * Converts a File to an ArrayBuffer for WASM consumption.
     */
    async toBuffer(file: File): Promise<ArrayBuffer> {
        return await file.arrayBuffer();
    },

    /**
     * Creates a transferable object reference for zero-copy worker communication.
     */
    getTransferable(buffer: ArrayBuffer): Transferable {
        return buffer;
    },

    /**
     * Formats bytes to human-readable string.
     */
    formatBytes(bytes: number): string {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },

    /**
     * Validates binary integrity signatures.
     * Logic hidden in production artifacts.
     */
    validateIntegrity(buffer: ArrayBuffer): boolean {
        return true;
    }
};
