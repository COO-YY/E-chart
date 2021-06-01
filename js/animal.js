// 头部标题时间函数
var t = null;
// 开始运行
t = setTimeout(time, 1000);

function time() {
  // 清除定时器
  clearTimeout(t);
  dt = new Date();

  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours();
  var m = dt.getMinutes();
  var s = dt.getSeconds();

  document.querySelector(".showTime").innerHTML =
    "当前时间：" + y + "年" + mt + "月" + day + "日-" + h + "：" + m + "：" + s;

  // 设置定时器 循环运行
  t = setTimeout(time, 1000);
}

//  e-chart图表左1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));

  // 指定配置和数据
  var option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: 0,
      bottom: "0",
      left: "center",
      textStyle: {
        color: "rgba(255,255,255,.5)",
      },
    },
    series: [
      {
        name: "单只宠物年消费金额",
        type: "pie",
        radius: ["60%", "70%"],
        avoidLabelOverlap: false,
        color: ["#F57474", "#56d0e3"],
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "16",
            fontWeight: "bold",
            // formatter: `{b}:{c}`,
          },
        },
        labelLine: {
          show: false,
        },

        data: [
          { value: 5516, name: "2019年消费金额" },
          { value: 5172, name: "2020年消费金额" },
        ],
      },
    ],
  };
  // 把配置项给实例对象
  myChart.setOption(option);

  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//  e-chart图表右1
(function () {
  var yearData = [
    {
      project: "线上购买渠道",
      data: [
        [
          "天猫/淘宝",
          "京东",
          "微信",
          "波奇",
          "E宠",
          "拼多多",
          "网易考拉",
          "亚马逊",
          "短视频平台",
          "线上种草平台",
          "苏宁易购",
          "唯品会",
          "直播平台",
          "小米有品",
        ],
        [91, 36.6, 17, 16.1, 9.1, 7.8, 3.7, 1.4, 1.1, 1.1, 1.0, 1.0, 0.8, 0.6],
      ],
    },
    {
      project: "宠物食品购买渠道偏好",
      data: [
        ["线上电商", "宠物店", "宠物医院", "微信社群", "商超", "犬猫舍"],
        [81.8, 17.5, 16.2, 10.0, 8.0, 2.8],
      ],
    },
    {
      project: "宠物相关信息获取渠道",
      data: [
        [
          "微信",
          "天猫/淘宝",
          "宠物医生推荐",
          "宠物店/线下",
          "宠物医院",
          "宠友社群",
          "微博",
          "宠物店主推荐",
          "线上社区",
          "京东",
          "宠物垂直平台",
          "B站",
          "犬猫舍推荐",
          "线上种草",
          "短视频推荐",
          "拼多多",
        ],
        [
          39.4,
          33.7,
          28.3,
          20.5,
          16.3,
          14.1,
          13.4,
          11.5,
          10.1,
          7.7,
          6.2,
          5.7,
          4.4,
          4.0,
          3.5,
          1.9,
        ],
      ],
    },
  ];

  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: "{a}:<br/> {b} : {c}%",
    },
    grid: {
      top: "2%",
      left: "1%",
      right: "2%",
      bottom: "0%",
      height: "220rpx",
      containLabel: true,
    },
    xAxis: {
      // type: "value",
      // boundaryGap: [0, 0.01],
      // axisLine: {
      show: false,
      // },
    },
    yAxis: {
      type: "category",
      data: yearData[0].data[0],
      axisLine: {
        show: false,
      },
      // 隐藏刻度
      axisTick: {
        show: false,
      },
      //y轴文字为白色
      axisLabel: {
        color: "rgba(255,255,255,.6)",
        interval: 0,
      },
      inverse: true,
    },
    series: [
      {
        name: "线上购买渠道偏好",
        type: "bar",
        data: yearData[0].data[1],
        itemStyle: {
          color: "#1089E7",
        },
        label: {
          show: true,
          formatter: "{c}%",
          position: "right",
        },
      },
    ],
  };
  myChart.setOption(option);

  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 点击切换图标
  $(".bar2 .change").on("click", "a", function () {
    console.log($(this)[0].innerText);
    option.yAxis.data = yearData[$(this).index()].data[0];
    option.series[0].data = yearData[$(this).index()].data[1];
    option.series[0].name = $(this)[0].innerText;
    // // 重新渲染
    myChart.setOption(option);
  });
})();

//  e-chart图表右2
(function () {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis",
      // axisPointer: {
      //   type: "cross",
      //   label: {
      //     backgroundColor: "#6a7985",
      //   },
      // },
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12",
      },
    },
    grid: {
      top: "30",
      left: "10",
      right: "10",
      bottom: "10",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        data: [
          "主粮",
          "零食",
          "营养品",
          "药品",
          "用品",
          "诊疗",
          "洗澡美容",
          "训练",
          "寄养",
          "保险",
        ],
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "14",
          },
          interval: 0,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "养犬消费渗透率",
        type: "line",
        stack: "总量",
        // 填充区域
        areaStyle: {
          // 设置渐变色
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1,132,213,0.4)", //渐变起始色
              },
              {
                offset: 0.8,
                color: "rgba(1,132,213,0.4)", //渐变尾色
              },
            ],
            false
          ),
          shadowColor: "rgba(0,0,0,0.1)",
        },
        // 线上的圆点 拐点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色样式
        itemStyle: {
          // 圆点颜色
          color: "#0184d5",
          // 圆角边框
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12,
        },
        // 开始不显示拐点，鼠标经过后显示
        showSymbol: false,
        data: [90.7, 81.8, 17.9, 85.2, 79.9, 66.5, 64.9, 4.1, 22.9, 8.8],
        smooth: true,
        // 单独修改线的样式
        lineStyle: {
          color: "#0184d5",
          width: 2,
        },
      },
      {
        name: "养猫消费渗透率",
        type: "line",
        stack: "总量",
        lineStyle: {
          color: "#00d887",
          width: 2,
        },
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,216,135,.4)",
              },
              {
                offset: 0.8,
                color: "rgba(0,216,135,.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0,0,0,.1)",
        },
        data: [95, 82.2, 28.2, 81, 80.7, 72.2, 26.4, 0.4, 11.1, 9.4],
        smooth: true,
        // 设置拐点
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221,220,107,.1)",
          borderWidth: 12,
        },
        // 鼠标经过显示拐点
        showSymbol: false,
      },
    ],
  };

  myChart.setOption(option);
  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

//  e-chart图表左2
(function () {
  var myChart = echarts.init(document.querySelector(".line .chart"));
  option = {
    color: ["#32c5e9", "#60cda0", "#0096ff", "#9fe6b8"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "2%",
      containLabel: true,
    },
    legend: {
      textStyle: {
        color: "rgba(255,255,255,.5)",
      },
    },

    xAxis: [
      {
        type: "category",
        data: ["2019", "2020"],
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: "1",
            type: "solid",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],

    series: [
      {
        name: "普通消费人群占比",
        type: "bar",
        barWidth: "18%",
        stack: "消费人群",
        emphasis: {
          focus: "series",
        },
        data: [76.1, 78.3],
      },
      {
        name: "高消费人群占比",
        type: "bar",
        stack: "消费人群",
        emphasis: {
          focus: "series",
        },
        data: [23.9, 21.7],
      },
      {
        name: "养犬高消费人群占比",
        type: "bar",
        stack: "高消费占比",
        barWidth: "18%",
        emphasis: {
          focus: "series",
        },
        data: [24.5, 21.6],
      },
      {
        name: "养猫高消费人群占比",
        type: "bar",
        stack: "高消费占比",
        emphasis: {
          focus: "series",
        },
        data: [22.2, 21.8],
      },
    ],
  };
  myChart.setOption(option);
  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // // 点击切换图标
  // $(".line h2").on("click", "a", function () {
  //   console.log($(this).index());
  //   option.series[0].data = yearData[$(this).index()].data[0];
  //   option.series[1].data = yearData[$(this).index()].data[1];
  //   // 重新渲染
  //   myChart.setOption(option);
  // });
})();

//  e-chart图表左3
(function () {
  var yearData = [
    {
      data: [
        [
          {
            value: 43,
            name: "2018年90后宠物主",
          },
          {
            value: 32.3,
            name: "2018年80后宠物主",
          },
          {
            value: 16,
            name: "2018年70后宠物主",
          },
          {
            value: 8.7,
            name: "2018年70前宠物主",
          },
        ],
        [
          {
            value: 45.2,
            name: "2019年90后宠物主",
          },
          {
            value: 29.5,
            name: "2019年80后宠物主",
          },
          {
            value: 16.6,
            name: "2019年70后宠物主",
          },
          {
            value: 8.7,
            name: "2019年70前宠物主",
          },
        ],
        [
          {
            value: 38.1,
            name: "2020年90后宠物主",
          },
          {
            value: 36.2,
            name: "2020年80后宠物主",
          },
          {
            value: 17.5,
            name: "2020年70后宠物主",
          },
          {
            value: 8.3,
            name: "2020年70前宠物主",
          },
        ],
      ],
    },
    {
      data: [
        [
          {
            value: 15.2,
            name: "2018年高中及以下学历宠物主",
          },
          {
            value: 32,
            name: "2018年大专学历宠物主",
          },
          {
            value: 45.2,
            name: "2018年大学本科学历宠物主",
          },
          {
            value: 7.6,
            name: "2018年硕士及以上学历宠物主",
          },
        ],
        [
          {
            value: 15.2,
            name: "2019年高中及以下学历宠物主",
          },
          {
            value: 27.5,
            name: "2019年大专学历宠物主",
          },
          {
            value: 47.7,
            name: "2019年大学本科学历宠物主",
          },
          {
            value: 9.6,
            name: "2019年硕士及以上学历宠物主",
          },
        ],
        [
          {
            value: 9.8,
            name: "2020年高中及以下学历宠物主",
          },
          {
            value: 22.2,
            name: "2020年大专学历宠物主",
          },
          {
            value: 53.9,
            name: "2020年大学本科学历宠物主",
          },
          {
            value: 14.1,
            name: "2020年硕士及以上学历宠物主",
          },
        ],
      ],
    },
    {
      data: [
        [
          {
            value: 49.6,
            name: "2019年宠物主收入4000以下",
          },
          {
            value: 26.2,
            name: "2019年宠物主收入4000-9999",
          },
          {
            value: 12.5,
            name: "2019年宠物主收入10000-14999",
          },
          {
            value: 11.7,
            name: "2019年宠物主收入15000以上",
          },
        ],
        [
          {
            value: 22.3,
            name: "2020年宠物主收入4000以下",
          },
          {
            value: 47.6,
            name: "2020年宠物主收入4000-9999",
          },
          {
            value: 14.4,
            name: "2020年宠物主收入10000-14999",
          },
          {
            value: 15.7,
            name: "2020年宠物主收入15000以上",
          },
        ],
        [],
      ],
    },
  ];
  var myChart = echarts.init(document.querySelector(".pie .chart"));

  var option = {
    grid: {
      top: "30",
      left: "10",
      right: "10",
      bottom: "10",
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{b}:{d}%",
    },

    series: [
      {
        type: "pie",
        selectedMode: "single",
        radius: ["25%", "48%"],
        color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f"],

        label: {
          normal: {
            position: "inner",
            formatter: "{d}%",
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
            },
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: yearData[0].data[0],
      },
      {
        type: "pie",
        radius: ["48%", "73%"],
        color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f"],

        label: {
          normal: {
            position: "inner",
            formatter: "{c}%",
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
            },
          },
        },
        data: yearData[0].data[1],
      },
      {
        type: "pie",
        radius: ["73%", "100%"],
        color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f"],

        label: {
          normal: {
            position: "inner",
            formatter: "{c}%",
            textStyle: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: 14,
            },
          },
        },
        data: yearData[0].data[2],
      },
    ],
  };

  myChart.setOption(option);
  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 点击切换图标
  $(".pie .people").on("click", "a", function () {
    console.log($(this).index());
    option.series[0].data = yearData[$(this).index()].data[0];
    option.series[1].data = yearData[$(this).index()].data[1];
    option.series[2].data = yearData[$(this).index()].data[2];
    // 重新渲染
    myChart.setOption(option);
  });
})();

//  e-chart图表右3
(function () {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));

  var yearData = [
    {
      year: "2019",
      data: [74.3, 60.2, 54.2, 18.2, 17, 14.2, 4.9, 3.1, 2.6],
      color: [
        "#f845f1",
        "#ad46f3",
        "#5045f6",
        "#4777f5",
        "#44aff0",
        "#45dbf7",
        "#f6d54a",
        "#f69846",
        "#ff4343",
      ],
    },
    {
      year: "2020",
      data: [76.5, 71.6, 54.5, 18.8, 15.7, 12, 4.2, 3.6, 1.3],
      color: [
        "#f845f1",
        "#ad46f3",
        "#5045f6",
        "#4777f5",
        "#44aff0",
        "#45dbf7",
        "#f6d54a",
        "#f69846",
        "#ff4343",
      ],
    },
  ];
  var option = {
    calculable: true,
    tooltip: {
      trigger: "item",
      formatter: "{a}<br/>{b}:{c}%",
    },
    calculable: true,
    legend: {
      icon: "circle",
      x: "center",
      y: "15%",
      data: [
        "离家近，方便快捷",
        "专业服务好",
        "环境整洁舒适",
        "性价比",
        "用户口碑",
        "线上预约咨询",
        "上门服务",
        "连锁机构",
        "品牌知名度",
      ],
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "宠物洗澡美容消费决策因素",
        type: "pie",
        radius: [20, 135],
        avoidLabelOverlap: false,
        startAngle: 0,
        center: ["50%", "40%"],
        roseType: "area",
        // selectedMode: "single",
        label: {
          normal: {
            show: true,
            formatter: "{c}%",
          },
          emphasis: {
            show: true,
          },
        },
        labelLine: {
          normal: {
            show: true,
            smooth: false,
            length: 5,
            length2: 5,
          },
          emphasis: {
            show: true,
          },
        },
        data: [
          {
            value: yearData[0].data[0],
            name: "离家近，方便快捷",
            itemStyle: {
              color: yearData[0].color[0],
            },
          },
          {
            value: yearData[0].data[1],
            name: "专业服务好",
            itemStyle: {
              color: yearData[0].color[1],
            },
          },
          {
            value: yearData[0].data[2],
            name: "环境整洁舒适",
            itemStyle: {
              color: yearData[0].color[2],
            },
          },
          {
            value: yearData[0].data[3],
            name: "性价比",
            itemStyle: {
              color: yearData[0].color[3],
            },
          },
          {
            value: yearData[0].data[4],
            name: "用户口碑",
            itemStyle: {
              color: yearData[0].color[4],
            },
          },
          {
            value: yearData[0].data[5],
            name: "线上预约咨询",
            itemStyle: {
              color: yearData[0].color[5],
            },
          },
          {
            value: yearData[0].data[6],
            name: "上门服务",
            itemStyle: {
              color: yearData[0].color[6],
            },
          },
          {
            value: yearData[0].data[7],
            name: "连锁机构",
            itemStyle: {
              color: yearData[0].color[7],
            },
          },
          {
            value: yearData[0].data[8],
            name: "品牌知名度",
            itemStyle: {
              color: yearData[0].color[8],
            },
          },

          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 50,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
          {
            value: 0,
            name: "",
            itemStyle: {
              normal: {
                color: "rgba(0,0,0,0)",
              },
            },
          },
        ],
      },
    ],
  };

  myChart.setOption(option);
  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 点击切换图标
  $(".pie2 .reason").on("click", "a", function () {
    console.log($(this).index());
    option.series[0].data[0].value = yearData[$(this).index()].data[0];
    option.series[0].data[1].value = yearData[$(this).index()].data[1];
    option.series[0].data[2].value = yearData[$(this).index()].data[2];
    option.series[0].data[3].value = yearData[$(this).index()].data[3];
    option.series[0].data[4].value = yearData[$(this).index()].data[4];
    option.series[0].data[5].value = yearData[$(this).index()].data[5];
    option.series[0].data[6].value = yearData[$(this).index()].data[6];
    option.series[0].data[7].value = yearData[$(this).index()].data[7];
    option.series[0].data[8].value = yearData[$(this).index()].data[8];
    // color
    option.series[0].data[0].itemStyle.color =
      yearData[$(this).index()].color[0];
    option.series[0].data[1].itemStyle.color =
      yearData[$(this).index()].color[1];
    option.series[0].data[2].itemStyle.color =
      yearData[$(this).index()].color[2];
    option.series[0].data[3].itemStyle.color =
      yearData[$(this).index()].color[3];
    option.series[0].data[4].itemStyle.color =
      yearData[$(this).index()].color[4];
    option.series[0].data[5].itemStyle.color =
      yearData[$(this).index()].color[5];
    option.series[0].data[6].itemStyle.color =
      yearData[$(this).index()].color[6];
    option.series[0].data[7].itemStyle.color =
      yearData[$(this).index()].color[7];
    option.series[0].data[8].itemStyle.color =
      yearData[$(this).index()].color[8];
    // // 重新渲染
    myChart.setOption(option);
  });
})();

//  e-chart图表地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var colorList = [
    "#1089E7",
    "#F57474",
    "#1e90ff",
    "#f8b448",
    "#ff7f50",
    "#87cefa",
    "#7b68ee",
    "#6495ed",
    "#ff69b4",
    "#ba55d3",
    "#cd5c5c",
    "#ffa500",
    "#40e0d0",
    "#ff6347",
    "#da70d6",
    "#4c9bfb",
    "#00c1de",
    "#2f89cf",
  ];
  var getData = [
    {
      season: "第一季度",
      data: [
        {
          value:
            " Babypet(食品)" +
            "\n\n" +
            "融资金额：近千万元" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 160, //设置圈圈的大小
          draggable: true, //是否可拖拽
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[0],
              color: colorList[0],
            },
          },
        },
        {
          value:
            " E宠商城(电商)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：未公布",
          symbolSize: 170,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[1],
              color: colorList[1],
            },
          },
        },
        {
          value:
            " 信元发育宝(食品)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：战略投资",
          symbolSize: 180,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[2],
              color: colorList[2],
            },
          },
        },
        {
          value:
            " 宠加(电商)" +
            "\n\n" +
            "融资金额：千万级" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 150,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[3],
              color: colorList[3],
            },
          },
        },
        {
          value:
            " 小佩(智能用品)" +
            "\n\n" +
            "融资金额：2000万美元" +
            "\n\n" +
            "融资阶段：C轮",
          symbolSize: 188,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[4],
              color: colorList[4],
            },
          },
        },
        {
          value:
            " 联盟工坊(鲜粮)" +
            "\n\n" +
            "融资金额：数十万元" +
            "\n\n" +
            "融资阶段：种子轮",
          symbolSize: 158,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[5],
              color: colorList[5],
            },
          },
        },
        {
          value:
            " Touchdog(用品)" +
            "\n\n" +
            "融资金额：千万级" +
            "\n\n" +
            "融资阶段：pre-A轮",
          symbolSize: 178,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[6],
              color: colorList[6],
            },
          },
        },
        {
          value:
            " 魔力猫盒(订阅电商)" +
            "\n\n" +
            "融资金额：1300万美元" +
            "\n\n" +
            "融资阶段：B轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[7],
              color: colorList[7],
            },
          },
        },
      ],
    },
    {
      season: "第二季度",
      data: [
        {
          value:
            " TIPS小贴士(保险)" +
            "\n\n" +
            "融资金额：数百万元" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 160, //设置圈圈的大小
          draggable: true, //是否可拖拽
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[9],
              color: colorList[9],
            },
          },
        },
        {
          value:
            " 宜宠(智能用品)" +
            "\n\n" +
            "融资金额：450万元" +
            "\n\n" +
            "融资阶段：Pre-A轮",
          symbolSize: 170,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[10],
              color: colorList[10],
            },
          },
        },
        {
          value:
            " 宠缘(服务平台)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：未公布",
          symbolSize: 180,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[12],
              color: colorList[12],
            },
          },
        },
        {
          value:
            " 喵圈(内容电商)" +
            "\n\n" +
            "融资金额：近百万元" +
            "\n\n" +
            "融资阶段：种子轮",
          symbolSize: 150,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[13],
              color: colorList[13],
            },
          },
        },
        {
          value:
            " 霍曼宠物(智能用品)" +
            "\n\n" +
            "融资金额：1000万美元" +
            "\n\n" +
            "融资阶段：Pre-A轮",
          symbolSize: 188,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[14],
              color: colorList[14],
            },
          },
        },
        {
          value:
            " 佳雯宠物医院(医院)" +
            "\n\n" +
            "融资金额：1100万元" +
            "\n\n" +
            "融资阶段：战略投资",
          symbolSize: 158,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[15],
              color: colorList[15],
            },
          },
        },
        {
          value:
            " 疯狂小狗(食品)" +
            "\n\n" +
            "融资金额：3亿元" +
            "\n\n" +
            "融资阶段：战略投资",
          symbolSize: 178,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[16],
              color: colorList[16],
            },
          },
        },
        {
          value:
            " Cute&Cuter(食品)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[17],
              color: colorList[17],
            },
          },
        },
        {
          value:
            " 宠爱国际(医院)" +
            "\n\n" +
            "融资金额：1亿+元" +
            "\n\n" +
            "融资阶段：B轮、B+轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[8],
              color: colorList[8],
            },
          },
        },
        {
          value:
            "它岛宠物(酒店)" +
            "\n\n" +
            "融资金额：数百万元" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[9],
              color: colorList[9],
            },
          },
        },
      ],
    },
    {
      season: "第三季度",
      data: [
        {
          value:
            " 乖宝宠物(零食)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：战略投资",
          symbolSize: 160, //设置圈圈的大小
          draggable: true, //是否可拖拽
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[10],
              color: colorList[10],
            },
          },
        },
        {
          value:
            " 毛球殿下DownyBall(鲜粮)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：A轮",
          symbolSize: 170,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[17],
              color: colorList[17],
            },
          },
        },
        {
          value:
            " 宠加(小程序电商)" +
            "\n\n" +
            "融资金额：500万美元" +
            "\n\n" +
            "融资阶段：A轮",
          symbolSize: 180,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[18],
              color: colorList[18],
            },
          },
        },
        {
          value:
            " 福贝宠食(主粮)" +
            "\n\n" +
            "融资金额：3亿人民币" +
            "\n\n" +
            "融资阶段：B轮",
          symbolSize: 150,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[3],
              color: colorList[3],
            },
          },
        },
        {
          value:
            " 萌宠小白盒(订阅电商)" +
            "\n\n" +
            "融资金额：近千万元" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 188,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[4],
              color: colorList[4],
            },
          },
        },
        {
          value:
            "派多格(连锁品牌)" +
            "\n\n" +
            "融资金额：数千万美元" +
            "\n\n" +
            "融资阶段：A轮",
          symbolSize: 158,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[5],
              color: colorList[5],
            },
          },
        },
        {
          value:
            " 极宠家(产品零售)" +
            "\n\n" +
            "融资金额：5亿元" +
            "\n\n" +
            "融资阶段：战略投资",
          symbolSize: 178,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[6],
              color: colorList[6],
            },
          },
        },
        {
          value:
            " FURRYTAIL尾巴生活(全品类)" +
            "\n\n" +
            "融资金额：8000万人民币" +
            "\n\n" +
            "融资阶段：A+轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[7],
              color: colorList[7],
            },
          },
        },
        {
          value:
            " Mr Zoo小小动物园(室内动物园)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：Pre-A轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[8],
              color: colorList[8],
            },
          },
        },
        {
          value:
            "宠物家Pet'em(美容)" +
            "\n\n" +
            "融资金额：1亿元人民币" +
            "\n\n" +
            "融资阶段：B轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[9],
              color: colorList[9],
            },
          },
        },
        {
          value:
            "猫猫狗狗科技(智能家居)" +
            "\n\n" +
            "融资金额：未公布" +
            "\n\n" +
            "融资阶段：A轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[10],
              color: colorList[10],
            },
          },
        },
        {
          value:
            "宠耀基因(基因检测)" +
            "\n\n" +
            "融资金额：500万人民币" +
            "\n\n" +
            "融资阶段：天使轮",
          symbolSize: 148,
          draggable: true,
          itemStyle: {
            normal: {
              shadowBlur: 100,
              shadowColor: colorList[11],
              color: colorList[11],
            },
          },
        },
      ],
    },
  ];

  option = {
    tooltip: {
      formatter: "{c}",
    },
    animationDurationUpdate: function (idx) {
      // 越往后的数据延迟越大
      return idx * 100;
    },
    animationEasingUpdate: "bounceIn",
    series: [
      {
        type: "graph",
        layout: "force",
        force: {
          repulsion: 800,
          edgeLength: 10,
        },
        roam: true,
        label: {
          show: true,
          formatter: ["{title|{c}}", "{name|{b}}"].join("\n"),
          rich: {
            title: {
              fontSize: 16,
              color: "#fff",
              textAlign: "center",
            },
            name: {
              fontSize: 14,
              color: "#fff",
              textAlign: "center",
            },
          },
        },
        data: getData[0].data,
      },
    ],
  };
  myChart.setOption(option);
  //   图表自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 点击切换图标
  $(".column .season").on("click", "a", function () {
    // console.log($(this).index());
    option.series[0].data = getData[$(this).index()].data;
    // 重新渲染
    myChart.setOption(option);
  });
})();
