(() => {
  try {
    const detectJs = chain => {
      const properties = chain.split(".");

      let value = properties.length ? window : null;

      for (let i = 0; i < properties.length; i++) {
        const property = properties[i];

        if (value && value.hasOwnProperty(property)) {
          value = value[property];
        } else {
          value = null;

          break;
        }
      }

      return typeof value === "string" || typeof value === "number"
        ? value
        : !!value;
    };

  
      