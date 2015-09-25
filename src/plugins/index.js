module.exports = function(server){
  return [
    {
      register: require('hapi-versioning'),
      options: {
        pattern: /^(v[1-9])$/
      }
    },
    {
      register: require('vision')
    },
    {
      register: require('lout')
    },
    {
      register: require('inert')
    }
  ];
};
