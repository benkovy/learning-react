const person = {
    name: 'ben',
    age: 22,
    location: {
        city: 'Halifax',
        temp: 92
    }
};

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { title, author } = book;
const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);