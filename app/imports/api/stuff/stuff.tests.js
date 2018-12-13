/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { Stuff } from './stuff.js';

if (Meteor.isServer) {
  describe('Stuff', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        Stuff.remove({});
        taskId = Stuff.insert({
          recipe: 'test recipe',
          ingredients: 'test ingredients',
          directions: 'test directions',
          cuisineType: 'breakfast',
        });
      });

      it('can find added recipe', () => {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['stuff.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation, [taskId]);

        // Verify that the method does what we expected
        assert.equal(Stuff.find({ recipe: 'test recipe' }), true);
      });
    });
  });
}
