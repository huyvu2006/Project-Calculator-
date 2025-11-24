
let arr = {
    btn0: 0,
    btn1: 1,
    btn2: 2,
    btn3: 3,
    btn4: 4,
    btn5: 5,
    btn6: 6,
    btn7: 7,
    btn8: 8,
    btn9: 9,
  }

let so = [1,2,3,4,5,6,7,8,9,0]
let toan = ['+','-','*','/']
function cong (val) {
  let ketQua = val.reduce((khoiTao,val1) => {
    return val1 + khoiTao
  })
  return ketQua;
}

function tru (val) {
    let ketQua = val.reduce((khoiTao,val1) => {
    return khoiTao - val1
  })
  return ketQua;
}

function nhan (val) {
    let ketQua = val.reduce((khoiTao,val1) => {
    return khoiTao * val1
  })
  return ketQua;
}

function chia (val) {
    let ketQua = val.reduce((khoiTao,val1) => {
    return khoiTao / val1
  })
  return ketQua;
}

let thamSo1 = () => {
    let a = prompt('nhap tham so 1',0)
    return +a
}

let thamSo2 = () => {
    let a = +prompt('nhap tham so 1',0)
    return +a
}

let phepTinh = () => {
    return prompt('moi nhap toan tu','')
}

let chuaSo = []
koQ = []

function operate (val) {
  chuaSo.push(val)
}

function tinhToan (val,phep) {
  if (phep[0] == '+' ) {
    let kQ = cong(val)
    koQ.push(kQ)
    return kQ
  }
  else if (phep[0] == '-' ) {
    let kQ = tru(val)
    koQ.push(kQ)
    return kQ
  }
  else if (phep[0] == '*' ) {
    let kQ = nhan(val)
    koQ.push(kQ)
    return kQ
  }
  else if (phep[0] == '/' ) {
    let kQ = chia(val)
    koQ.push(kQ)
    return kQ
  }
  
  }
  

function chuoiThanhso (val) {
  let doi = +val.join('')
  return doi
}

let manHinh = document.querySelector('.manHinh')
let mayTinh = document.querySelector('.mayTinh')
let nutBam = document.querySelector('.nutBam')

function taoBanPhim (val) {
    for (let arr1 in val) {
    let but = document.createElement('button')
    but.textContent = val[arr1];
    nutBam.appendChild(but)
    but.classList.add(arr1)

    arr1 = document.querySelector(`.${arr1}`)
    .addEventListener('click',() => {
    let phanTu = document.createElement('p')
    phanTu.textContent = `${but.textContent}`
    mayTinh.appendChild(phanTu)
    let doiKieu = phanTu.textContent
    chuaDulieu.push(doiKieu)
    chuaDulieu.filter((val) => {
      if (so.includes(+val)) {
        thamso.push(+val)
      }
      chuaDulieu.splice(0)
    })
    
    thamso2 = chuoiThanhso(thamso)
    
    })

  }
let btnCong = document.createElement('button')
btnCong.textContent = '+'
nutBam.appendChild(btnCong)
btnCong.classList.add('btncong')
btnCong.addEventListener('click',() => {
    let arr = []
    let phanTu = document.createElement('p')
    phanTu.textContent = btnCong.textContent
    mayTinh.appendChild(phanTu)
    let doiKieu = phanTu.textContent
    arr.push(doiKieu)
    arr.filter((val) => {
      if (toan.includes(val)) {
        toanTu.push(val)
      }
    })
    thamso.splice(0)
    operate(thamso2)
  })

let btnTru = document.createElement('button')
btnTru.textContent = '-'
nutBam.appendChild(btnTru)
btnTru.classList.add('btntru')
btnTru.addEventListener('click',() => {
    let arr = []
    let phanTu = document.createElement('p')
    phanTu.textContent = btnTru.textContent
    mayTinh.appendChild(phanTu)
    let doiKieu = phanTu.textContent
    arr.push(doiKieu)
    arr.filter((val) => {
      if (toan.includes(val)) {
        toanTu.push(val)
      }
    })
    thamso.splice(0)
    operate(thamso2)
  })


let btnNhan = document.createElement('button')
btnNhan.textContent = '*'
nutBam.appendChild(btnNhan)
btnNhan.classList.add('btnnhan')
btnNhan.addEventListener('click',() => {
    let arr = []
    let phanTu = document.createElement('p')
    phanTu.textContent = btnNhan.textContent
    mayTinh.appendChild(phanTu)
    let doiKieu = phanTu.textContent
    arr.push(doiKieu)
    arr.filter((val) => {
      if (toan.includes(val)) {
        toanTu.push(val)
      }
    })
    thamso.splice(0)
    operate(thamso2)
  })

let btnChia = document.createElement('button')
btnChia.textContent = '/'
nutBam.appendChild(btnChia)
btnChia.classList.add('btnchia')
btnChia.addEventListener('click',() => {
    let arr = []
    let phanTu = document.createElement('p')
    phanTu.textContent = btnChia.textContent
    mayTinh.appendChild(phanTu)
    let doiKieu = phanTu.textContent
    arr.push(doiKieu)
    arr.filter((val) => {
      if (toan.includes(val)) {
        toanTu.push(val)
      }
    })
    thamso.splice(0)
    operate(thamso2)
  })


let btnBang = document.createElement("button")
btnBang.textContent = '='
nutBam.appendChild(btnBang)
btnBang.classList.add('btnbang')
btnBang.addEventListener('click',() => {
    
    let phanTu = document.createElement('p')
    phanTu.textContent = btnBang.textContent
    mayTinh.appendChild(phanTu)
    let ketQua = () => { 
      let a = tinhToan(chuaSo,toanTu)
      if (a === undefined || a == Infinity || toanTu.length == 2) {
        return a = 'loi roi'
        
      }
      else {
      let tron = lamtron(a)
      return tron
      }
    }
    
    operate(thamso2)
    let ok = document.createElement('p')
    ok.textContent = String(ketQua())
    mayTinh.appendChild(ok)
    chuaSo.splice(0)
    toanTu.splice(0)
    thamso.splice(0)
    thamso2 = koQ[0]
    koQ.splice(0)
    mayTinh.textContent = ''
    mayTinh.appendChild(ok)
    
})
let btnClear = document.createElement('button')
btnClear.textContent = 'Clear'
nutBam.appendChild(btnClear)
btnClear.classList.add('btnClear')
btnClear.addEventListener('click',() => {
mayTinh.textContent = ''
thamso2 = 0
})
}

let chuaDulieu = []
let thamso = []
let thamso2 = []
let toanTu = []
let lamtron = (val) => {
  let ok = 2
  let tron = Math.pow(10,ok);
  let ketqua = Math.round(val*tron)/tron
  return ketqua
}
taoBanPhim(arr)