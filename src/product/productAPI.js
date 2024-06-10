// A mock function to mimic making an async request for data
export function fetchProduct() {
  return new Promise(async(resolve) =>{
    let response = await fetch('http://localhost:8000/feature/getfeatureproduct')
    let data = await response.json();
    resolve({data})
    // console.log(data)
  }
  );
}
