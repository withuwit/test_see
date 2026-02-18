// นี่คือ "กล่อง" ที่เก็บโค้ด WebAssembly (ฟังก์ชันบวกเลข) ที่ถูกแปลงเป็นไบนารีแล้ว
// (ปกติไฟล์นี้จะมาจากการ Compile ภาษา C++ หรือ Rust)
const wasmCode = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0,    // Header บอกว่าเป็นไฟล์ WASM
  1, 7, 1, 96, 2, 127, 127, 1, 127, // Type Section
  3, 2, 1, 0,                       // Function Section
  7, 7, 1, 3, 97, 100, 100, 0, 0,   // Export Section (ชื่อฟังก์ชัน "add")
  10, 9, 1, 7, 0, 32, 0, 32, 1, 106, 11 // Code Section (คำสั่ง a + b)
]);

async function runWasm() {
    console.log("--- WebAssembly in Node.js ---");

    // 1. สร้าง WebAssembly จากตัวเลขข้างบน
    const wasmModule = await WebAssembly.instantiate(wasmCode);
    
    // 2. ดึงฟังก์ชัน 'add' ออกมาใช้
    const wasmAdd = wasmModule.instance.exports.add;

    // 3. เรียกใช้งาน
    const result = wasmAdd(5, 10);
    console.log("ผลลัพธ์จาก WASM: " + result);
}

runWasm();