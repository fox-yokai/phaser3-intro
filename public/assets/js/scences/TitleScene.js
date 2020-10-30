class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;

        // create title text
        this.titleText = this.add.text(screenCenterX , screenCenterY, 'Fox MMORPG', {fontSize: '64px', fill: '#fff' }).setOrigin(0.5);

        // create the Play game button
        this.startGameButton = new UiButton(this, screenCenterX, screenCenterY * 1.3, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game'));
    }

    startScene(targetScene) {
        this.scene.start(targetScene)
    }
}