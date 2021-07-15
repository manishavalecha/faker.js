if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
  }

  describe("Books.js", function () {
    describe("Book_name()", function () {
        it("returns a random Book name", function () {
            sinon.stub(faker.Books, 'Book_name').returns('the great gatsby');
            var Book_name = faker.Book_name.Book_name();
  
            assert.equal(Book_name, 'the great gatsby');
            faker.Books.Book_name.restore();
        });
    });

  });
  