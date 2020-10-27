class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.coins = 10;

        // enable physics
        this.scene.physics.world.enable(this);
        // add the player to the existing scene
        this.scene.add.existing(this);
    }

    update(cursors) {
        this.body.setVelocity(0);

        if (cursors.left.isDown) {
            this.body.setVelocityX(-this.velocity);
        } else if (cursors.right.isDown) {
            this.body.setVelocityX(this.velocity);
        }
    
        if (cursors.up.isDown) {
            this.body.setVelocityY(-this.velocity);
        } else if (cursors.down.isDown) {
            this.body.setVelocityY(this.velocity);
        }
    }
}