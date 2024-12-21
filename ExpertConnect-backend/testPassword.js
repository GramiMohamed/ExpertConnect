const bcrypt = require('bcrypt');

const password = '123456'; // The plain-text password you're testing
const storedHash = '$2b$10$EVrwJh3uGeexbjFeXRjbYOthWf8rYRZljviIZWIhAjn.Znb9lLT8G'; // Your stored hash from DB

// Use bcrypt.compare to check if the password matches the hash
bcrypt.compare(password, storedHash, (err, res) => {
  if (err) throw err;
  console.log('Password matches hash:', res); // Should log 'true' if they match
});
