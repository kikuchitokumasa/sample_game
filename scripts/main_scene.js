// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }
    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('hanako', 'assets/hanako.png');

        this.load.image('apple', 'assets/apple.png');
        this.load.image('orange', 'assets/orange.png');
    }
    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'background');
        const player1 = this.physics.add.sprite(50, 50, 'taro');
        const player2 = this.physics.add.sprite(750, 400, 'hanako');    
        this.player1=player1;
        this.player2=player2;
    

        for(let i=0; i<5; i++){
        let  randx = Phaser.Math.Between(25, 775) ;  
        let randy =  Phaser.Math.Between(25, 425) ;  
        this.add.image(randx, randy , 'orange'); }
        for(let i=0; i<5; i++){
        let  randa = Phaser.Math.Between(25, 775) ;  
        let randb =  Phaser.Math.Between(25, 425) ;  
        this.add.image(randa, randb , 'apple');} 
        this.taro = taro
        this.hanako = hanako

    }
     // 毎フレーム実行される繰り返し処理
    update() {
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();
        if(cursors.up.isDown){
            console.log("Up!!");
            this.player1.setVelocityY(-40);// 上方向の速度を設定
            this.player2.setVelocityY(40);// 上方向の速度を設定
        } else if(cursors.down.isDown){
            console.log("down!!");
            this.player1.setVelocityY(40);// 下方向の速度を設定
            this.player2.setVelocityY(-40);// 下方向の速度を設定
        }else if(cursors.left.isDown){
            console.log("Left");
            this.player1.setVelocityX(-40);// 左方向の速度を設定
            this.player2.setVelocityX(40);// 左方向の速度を設定
        }else if(cursors.right.isDown){
            console.log("Right!!");
            this.player1.setVelocityX(40);// 右方向の速度を設定
            this.player2.setVelocityX(-40);// 右方向の速度を設定
        }else{
            this.player1.setVelocityX(0);// 横方向の速度を0
            this.player1.setVelocityY(0);// 縦方向の速度を0
            this.player2.setVelocityX(0);// 横方向の速度を0
            this.player2.setVelocityY(0);// 縦方向の速度を0
        }
    }
    rand(){
    
    }
}