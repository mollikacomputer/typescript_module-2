//module 2.4
// 12:09
interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrainCaraGhori {
  hartRate: string;
  stopWatch: boolean;
}
interface AppleWatch {
  hartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}
interface YahamaBike {
  brand: string;
  enginCapacity: string;
}
const poorDeveloper: Developer<BrainCaraGhori> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "Lenovo",
    model: "lenevo",
    releasedYear: "2009",
  },
  smartWatch: {
    hartRate: "200",
    stopWatch: true,
  },
  bike: null,
};

const richDeveloper: Developer<AppleWatch, YahamaBike> = {
  name: "Mr. Rich",
  salary: 2000000,
  device: {
    brand: "Samsung",
    model: "Samsung",
    releasedYear: "2025",
  },
  smartWatch: {
    hartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: {
    brand: "Yahama",
    enginCapacity: "200cc",
  },
};
console.log("Rich Developer:", richDeveloper);
console.log("Poor Developer:", poorDeveloper);
