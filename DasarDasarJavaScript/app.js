function funcLuar(){
    const nilaiLuar = "Ini string nilai luar"

    function funcDalam() {
        let nilaiDalam = `di dalam mengambil ${nilaiLuar}`
        console.log(nilaiDalam); 
    }

    funcDalam();
}

funcLuar();