class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallback) {
        super(scene, x, y);
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.key = key;
        this.hoverKey = hoverKey;
        this.text = text;
        this.targetCallback = targetCallback;

        // create the Ui Button
        this.createButton();
        // add this container to our Phaser Scene
        this.scene.add.existing(this); 
    }

    createButton() {
        // create play button
        this.button = this.add.image(0, 0, 'button1');
        // make button interactive
        this.button.setInteractive();
        // scale the button
        this.button.setScale(1.4);

        // create button text
        this.buttonText = this.add.text(0, 0, this.text, { fontSize: '28px', fill: '#fff' });
        // center the button text inside the Ui Button
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        // add the two game objects to the container
        this.add(this.button);
        this.add(this.buttonText);

        // listen for events
        this.button.on('pointerdown', () => {
            this.targetCallback();
        });
        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey);
        });
        this.button.on('pointerout', () => {
            this.button.setTexture(this.key);
        });
    }
}

