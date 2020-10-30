class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        // create title text
        this.titleText = this.add.text(screenCenterX , screenCenterY, 'Fox MMORPG', {fontSize: '64px', fill: '#fff' }).setOrigin(0.5);

        // create play button
        this.button = this.add.image(screenCenterX, screenCenterY * 1.3, 'button1');
        this.button.setInteractive();

        this.buttonText = this.add.text(0, 0, 'Start', { fontSize: '28px', fill: '#fff' });
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        this.button.on('pointerdown', () => {
            this.scene.start('Game');
        });
        this.button.on('pointerover', () => {
            this.button.setTexture('button2');
        });
        this.button.on('pointerout', () => {
            this.button.setTexture('button1');
        });
    }
}