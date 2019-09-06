const tabData = [
    {
        title: '标签一',
        list: [
            {
                subTitle: 'css课程'
            },
            {
                subTitle: 'css课程'
            },
            {
                subTitle: 'css课程'
            }
        ]
    },
    {
        title: '标签二',
        list: [
            {
                subTitle: 'js课程'
            }
        ]
    },
    {
        title: '标签三',
        list: [
            {
                subTitle: 'Vue课程'
            }
        ]
    }
];

const qqData = [
    {
        title: '我的好友',
        list: [
            {
                subTitle: '张国荣'
            },
            {
                subTitle: '周杰伦'
            },
            {
                subTitle: '王杰'
            }
        ]
    },
    {
        title: '我的同事',
        list: [
            {
                subTitle: '莫莫'
            },
            {
                subTitle: '多多'
            },
            {
                subTitle: 'leo'
            }
        ]
    }
];

const shuttleData={
    originData: [  // 源列表
        {
            id:1000,
            title: 'js课程',
            checked: false
        },
        {
            id:1101,
            title: 'css课程',
            checked: false
        },
        {
            id:1002,
            title: 'vue课程',
            checked: false
        },
        {
            id:1103,
            title: 'react课程',
            checked: true
        },
    ],
    targetData: [ // 目标列表
        {
            id:105660,
            title: 'Node课程',
            checked: true
        },
        {
            id:11088881,
            title: 'canvas课程',
            checked: true
        },
    ]
};

const data={
    tabData:tabData,
    qqData:qqData,
    shuttleData:shuttleData
};

export default data
