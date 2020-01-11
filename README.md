- 简单封装了过滤对象的方法

```
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
``` 
  
```
console.log(filterObj(raw, filter));
 {
    pid: 0,
    id: 15,
    name: "非编人员",
    children: [
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
```