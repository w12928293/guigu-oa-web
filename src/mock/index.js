
export const list = [
  {
    id: 1,
    title: '出勤请假',
    name: '1',
    data: [
      { id: 1, imgUrl: 'https://gw.alicdn.com/tfs/TB1t695CFYqK1RjSZLeXXbXppXa-102-102.png', name: '请假' },
      { id: 2, imgUrl: 'https://gw.alicdn.com/tfs/TB1bHOWCSzqK1RjSZFjXXblCFXa-112-112.png', name: '出差' },
      { id: 3, imgUrl: 'https://gw.alicdn.com/tfs/TB1cbCYCPTpK1RjSZKPXXa3UpXa-112-112.png', name: '机票出差' },
      { id: 4, imgUrl: 'https://gw.alicdn.com/tfs/TB1cbCYCPTpK1RjSZKPXXa3UpXa-112-112.png', name: '机票改签' },
      { id: 5, imgUrl: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png', name: '外出' },
      { id: 6, imgUrl: 'https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png', name: '补卡申请' },
      { id: 7, imgUrl: 'https://gw.alicdn.com/tfs/TB1Y8PlCNjaK1RjSZKzXXXVwXXa-112-112.png', name: '加班' },
      { id: 8, imgUrl: 'https://gw.alicdn.com/tfs/TB11X99CNTpK1RjSZFKXXa2wXXa-102-102.png', name: '居家隔离' },
    ]
  },
  {
    id: 2,
    title: '人事',
    name: '2',
    data: [
      { id: 1, imgUrl: 'https://gw.alicdn.com/tfs/TB1_YG.COrpK1RjSZFhXXXSdXXa-102-102.png', name: '请假' },
      { id: 2, imgUrl: 'https://gw.alicdn.com/tfs/TB13ca1CMDqK1RjSZSyXXaxEVXa-102-102.png', name: '调岗' },
      { id: 3, imgUrl: 'https://gw.alicdn.com/tfs/TB1U9iBCSzqK1RjSZPcXXbTepXa-102-102.png', name: '离职' },
    ]
  },
  {
    id:3,
    title: "财务",
    name: '3',
    data: [
      { id: 1, imgUrl: 'https://gw.alicdn.com/tfs/TB11pS_CFzqK1RjSZSgXXcpAVXa-102-102.png', name: '费用申请' },
      { id: 2, imgUrl: 'https://gw.alicdn.com/tfs/TB1t695CFYqK1RjSZLeXXbXppXa-102-102.png', name: '用章申请' },
      { id: 3, imgUrl: 'https://gw.alicdn.com/tfs/TB13f_aCQzoK1RjSZFlXXai4VXa-102-102.png', name: '携章外出' },
      { id: 4, imgUrl: 'https://gw.alicdn.com/tfs/TB1_YG.COrpK1RjSZFhXXXSdXXa-102-102.png', name: '学期内分期' },
      { id: 5, imgUrl: 'https://gw.alicdn.com/tfs/TB1_YG.COrpK1RjSZFhXXXSdXXa-102-102.png', name: '特殊学费' },
    ]
  },
  {
    id:4,
    title: "行政",
    name: '4',
    data: [
      { id: 1, imgUrl: 'https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png', name: '充值卡申领' },
      { id: 2, imgUrl: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png', name: '礼品申领' },
      { id: 3, imgUrl: 'https://gw.alicdn.com/tfs/TB1FNG.CMHqK1RjSZFgXXa7JXXa-102-102.png', name: '邮寄快递申请' },
      { id: 4, imgUrl: 'https://gw.alicdn.com/imgextra/i3/O1CN01LLn0YV1LhBXs7T2iO_!!6000000001330-2-tps-120-120.png', name: '合同审批' },
      { id: 5, imgUrl: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png', name: '合同借阅' },
    ]
  },
  {
    id:5,
    title: "其他",
    name: '5',
    data: [
      { id: 1, imgUrl: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png', name: '魔点临时开门权限' },
      { id: 2, imgUrl: 'https://gw.alicdn.com/tfs/TB1bHOWCSzqK1RjSZFjXXblCFXa-112-112.png', name: '北京科技园车证审批' },
      { id: 3, imgUrl: 'https://gw.alicdn.com/tfs/TB1e76lCOLaK1RjSZFxXXamPFXa-112-112.png', name: '魔点访客提前预约审批' },
    ]
  }
]

export const tabList = [
  { id: 1, title:"待处理", },
  { id: 2, title:"已处理", },
  { id: 3, title:"已发起", },
  { id: 4, title:"我收到的", },
]

export const cellList = [
  {
    id: 1,
    avatar: 'https://static.dingtalk.com/media/lALOnahFD80CgM0CgA_640_640.png_450x10000q90.jpg',
    title: "朽木白提交的请假",
    type: '请假类型：事假',
    startTime: '2022-12-06- 16:24',
    endTime: '2022-12-06 21:32',
    createTime: '14:28',
    status: 1,
    statusText: '审批通过'
  },
  {
    id: 2,
    avatar: 'https://static.dingtalk.com/media/lALOnahFD80CgM0CgA_640_640.png_450x10000q90.jpg',
    title: "朽木白提交的请假",
    type: '请假类型：事假',
    createTime: '2022.10.13',
    startTime: '2022-12-06- 16:24',
    endTime: '2022-12-06 21:32',
    status: 0,
    statusText: '审批拒绝'
  },
]

export const cellDetail = [
  {id: 1, title: '审批编号', content:"123478293758925"},
  {id: 2, title: '所在部门', content:"北京校区-尚硅谷教育-研究院"},
  {id: 3, title: '申请金额（元）', content:"456.00"},
  {id: 4, title: '大写', content:"肆佰伍拾陆元整"},
  {id: 5, title: '事由', content:"服务器续期2个月"},
  {id: 6, title: '所在校区', content:"北京校区"},
  {id: 7, title: '部门', content:"教学部"},
]