class Radix_Sort {
    constructor() {

    }
    // IO process
    dataIO() {
        // [2,4,28,1,56,32,9,34,78,32,15,67,88,23,8,5,6,2,3,90]
        process.stdin.setEncoding('utf8');
        console.log('Pisahkan dengan koma contoh (2,3,4,5)')
        process.stdin.on('data', (data) => {
        const rawData = data.trim()
        console.log(`You typed: ${data} ${typeof(data)}`)
        const sort = this.sortR(rawData)
        // Exit the process manually if needed
        process.exit();
        return data
        }); 
    }
    //sorting
    sortR(data) {
        // string "2,3,4" to array [2, 3, 4]
        let arrayData = data.split(',').map(Number)

        const start = performance.now() // starts the benchmark duration

        // Sort algorithm built in
        // let sortB = arrayData.sort((a, b) => a - b).join(', ')
   
        // Sort algorithm manual radix alg
        const arrGroup = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [], 
            8: [],
            9: []
        }
        let arrSort = []
        let digPos = 0; // 0=ones, 1=tens, 2=hundreds, so on
        let con = true
        while (con) {
            for (let s = 0; s < arrayData.length; s++) {
                let getLastChar = arrayData[s] % 10 // need to check
                // kelompokan digit elemen tersebut ke dalam bucket
                let getGroup = arrGroup[getLastChar] // checked: gets the obj property of element last character value
                getGroup.push(arrayData[s]) // checked: inserts/pushes the array[s] element into the obj property
            }
            arrSort = Object.values(arrGroup).flat() // checked
            digPos++
            console.log(arrSort)
            for (let e = 0; e < arrSort.length - 1; e++) {
                if (arrSort[e] > arrSort[e + 1]) {continue}
                if (e == arrSort.length - 1) {con = false}
            }
        }
        const end = performance.now() //ends the benchmark
        const tdms = (end - start).toFixed(4) // get duration between startDate and endDate
        const result = console.log(`Sorted: ${arrSort} ${digPos} \nDuration: ${tdms} ms`) // >> ${sortB}
        return result
    }
}

const test1 = new Radix_Sort
test1.dataIO()