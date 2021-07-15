/**
 *
 * @namespace faker.Books
 */
var Books = function (faker) {
  
    var self = this;
    var f = faker.fake;
    
    /**
     * suffixes
     *
     * @method faker.Books.Book_name
     */
    this.Book_name = function () {
      // Don't want the source array exposed to modification, so return a copy
      return faker.random.arrayElement(faker.definitions.Books.Book_name);
    }
  
   
  
    /**
     * Book_author_name
     * 
     *
     * @method faker.Books.Book_author_name
     */
    this.Book_author_name = function () {
        return faker.random.arrayElement(faker.definitions.Books.Book_author_name);
    }
  
    /**
     * Book_author_name
     * 
     *
     * @method faker.Books.Book_published_year
     */
    this.Book_published_year = function () {
        return faker.random.arrayElement(faker.definitions.Books.Book_published_year);
    }

    /**
     * Book_genre
     * 
     *
     * @method faker.Books.Book_genre
     */
    this.Book_genre = function () {
        return faker.random.arrayElement(faker.definitions.Books.Book_genre);
    } 

  /**
     * Book_price
     * 
     * 
     *
     * @method faker.Books.Book_published_year
     */
    this.Book_price = function () {
        return faker.random.arrayElement(faker.definitions.Books.Book_price);
    }
  /**
     * Book_source_link
     * 
     * 
     *
     * @method faker.Books.Book_published_year
     */
    this.Book_source_link = function () {
        return faker.random.arrayElement(faker.definitions.Books.Book_source_link);
    }
  
}  
  module['exports'] = Books;
