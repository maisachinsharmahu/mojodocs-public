import { ProtectedTool } from "@/components/ProtectedTool";

/**
 * MojoDocs Public Teaser - Home Page
 * 
 * Demonstrates the tool registration pattern without exposing 
 * actual tool components.
 */

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <div className="container mx-auto px-4 py-32">
        <ProtectedTool 
          name="PDF Compressor"
          category="pdf"
          description="Lossless and visual PDF compression with multi-threaded WASM support. Reduce file sizes by up to 90% without losing quality."
        />
        
        <div className="mt-20">
          <ProtectedTool 
            name="Deepfake Detector"
            category="image"
            description="Forensic-grade image analysis using structural noise patterns and metadata integrity checks to detect AI manipulation."
          />
        </div>
      </div>
    </main>
  );
}
