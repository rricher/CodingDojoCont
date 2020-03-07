function orderSupplies(item) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        warehouse = {
          paint: {
            product: 'Neon Green Paint',
            directions: () => 'mix it!'
          },
          brush: {
            product: 'Horsehair brush',
            directions: () => 'start painting!'
          },
          tarp: {
            product: 'A large tarp',
            directions: () => 'cover the floor!',
          }
        };
        resolve(warehouse[item]);
      }, deliveryTime);
    });
  }
  