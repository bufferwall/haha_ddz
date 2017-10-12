cc.Class({
    extends: cc.Component,

    properties: {
        singleBtn: cc.Button,
        onlineBtn: cc.Button
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        //绑定点击事件
        this.singleBtn.node.on('click', function (event) {
            console.log('on click signleBtn');
        }, this);
        this.onlineBtn.node.on('click', function (event) {
            console.log('on click onlineBtn');
        }, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
