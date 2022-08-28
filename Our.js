async function after(s) {
  return new Promise((resolve) => {
    setTimeout(resolve, s * 1000);
  });
};

module.exports = async()=>{
await after(15).then(()=> {
return "Sheikh El-Moctar";
});
};
