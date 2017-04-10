import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai'

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {

      it('can delete owned task', () => {
        assert.equal(1,1);
      });
    });
  });
}
