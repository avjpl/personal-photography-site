module.exports = conn => ({
  contact: {
    addContact: async ({ input: data }) => {
      const doc = conn.collection('contact').insertOne(data);

      const { ops } = await doc;

      return ops[0];
    },
  },
});
