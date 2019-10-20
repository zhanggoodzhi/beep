let websock = null
// let serverPort = '8093'// webSocket连接端口
let funArr = []
function getWebIP () {
  let curIp = window.location.hostname
  const port = window.location.port
  return curIp + ':' + port
  /* if(port == 8099){
    serverPort = '8093'
  }
  else if (port == 8098){
    serverPort = '9093'
  }
  curIP = curIP+':'+serverPort;
  // return 'git.smsing.com.cn:8093';
  return curIP; */
}
function initWebSocket () { // 初始化weosocket
  // ws地址
  var wsuri = 'ws://' + getWebIP() + '/wsapi/20'
  // console.log(wsuri)
  websock = new WebSocket(wsuri)
  websock.onmessage = function (e) {
    websocketonmessage(e)
  }
  websock.onclose = function (e) {
    websocketclose(e)
  }
  websock.onopen = function () {
    websocketOpen()
  }
  // 连接发生错误的回调方法
  websock.onerror = function () {
    console.log('WebSocket连接发生错误')
    initWebSocket()
  }
}
// 实际调用的方法
function sendSock (id, agentData, callback, params) {
  let li = {
    id: id,
    type: agentData,
    fun: callback,
    params: params
  }
  if (JSON.stringify(funArr).indexOf(JSON.stringify(li)) === -1) {
    if (li.id === 'tenent_orderNum' || li.id === 'operation_orderNum') {
      funArr.push(li)
    } else {
      if (li.fun) {
        let listExit = false
        funArr.forEach((data) => {
          if (data.id.indexOf('list') !== -1) {
            listExit = true
          }
        })
        if (!listExit) {
          funArr.push(li)
        } else {
          let indexValue = ''
          funArr.forEach((data, index) => {
            if (data.id.indexOf('list') !== -1) {
              indexValue = index
            }
          })
          funArr.splice(indexValue, 1, li)
        }
      }
    }
  }
  if (websock.readyState === websock.OPEN) {
    // 若是ws开启状态
    // websocketsend(agentData)
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendSock(id, agentData, callback, params)
    }, 1000)
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function () {
      sendSock(id, agentData, callback, params)
    }, 1000)
  }
}

// 数据接收
function websocketonmessage (e) {
  if (e.data !== '连接成功') {
    // console.log(funArr)
    funArr.forEach((data) => {
      if (data.type === JSON.parse(e.data).type) {
        if (data.params) {
          data.fun(...data.params)
        } else {
          data.fun()
        }
        //  websock.onclose();
      }
    })
  }
}

// 数据发送
// function websocketsend(agentData){
//   websock.send(JSON.stringify(agentData));
// }

// 关闭
function websocketclose (e) {
  console.log('断开连接', e)
  initWebSocket()
}

function websocketOpen (e) {
  // console.log("连接成功");
}

// initWebSocket();

export {sendSock}
