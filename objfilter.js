let raw = [
  {
    pid: 0,
    id: 2,
    name: "总务室",
    children: [{ id: 1, name: "张三", pid: 2 }]
  },
  {
    pid: 0,
    id: 15,
    name: "非编人员",
    children: [
      { id: 70, name: "薛晨", pid: 15 },
      { id: 80, name: "刘涛", pid: 15 }
    ]
  },
  {
    pid: 0,
    id: 13,
    name: "大班组",
    children: [
      { id: 53, name: "邓佳慧", pid: 13 },
      { id: 55, name: "范铭珺", pid: 13 }
    ]
  }
];

let filter = [
  {
    pid: 0,
    id: 2,
    name: "总务室",
    children: [{ id: 1, name: "张三", pid: 2 }]
  },
  {
    pid: 0,
    id: 15,
    name: "非编人员",
    children: [{ id: 70, name: "薛晨", pid: 15 }]
  }
];

function filterObj(raw, filter) {
  // 先要找到共有的id
  let indexList = [];
  for (let i = 0; i < raw.length; i++) {
    for (let j = 0; j < filter.length; j++) {
      if (raw[i].id === filter[j].id) {
        indexList.push(i);
      }
    }
  }
  let tempnamelist = {};
  for (let i of filter) {
    for (let j of i.children) {
      let id = j.id;
      tempnamelist[id] = null;
    }
  }
  // 找到filter里面的名
  for (let i of indexList) {
    raw[i].children = raw[i].children.filter(i => {
      return !(i.id in tempnamelist);
    });
  }
  raw = raw.filter(v => v.children.length !== 0);
  // 加了这句话如果raw中的children为空就会过滤调
  return raw;
}

console.log(filterObj(raw, filter));
