const multiplyValue  = (value1:number, value2?:number):number =>{
  if(value2 === 0){
     return 0
  }else if(value2 === undefined){
    const result = value1 * 2;
    return result;
  }else{
    const result = value1 * value2;
    return result;
  }
};



type ValueType = string | number | boolean;
const processInput  = (value : ValueType): string | number =>{
   if(typeof value === "string"){
    const str = value.trim().toLowerCase()
    return str;
   } else if(typeof value === "number"){
    const num = value * 10;
    return num;
   }else {
    return value? "Active" : "Inactive"
   }
};



type ValueType = string | number | boolean;
const processInput  = (value : ValueType): string | number =>{
   if(typeof value === "string"){
    const str = value.trim().toLowerCase()
    return str;
   } else if(typeof value === "number"){
    const num = value * 10;
    return num;
   }else {
    return value? "Active" : "Inactive"
   }
};


const concatenateArrays = <T>(...arrays: T[][]): T [] =>{
 const flatArray = arrays.flat(Infinity);
 return flatArray as T []
};



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
};
const getPopularCourses  = (courseData: Course[], minStudents: number): Course[] =>{
let wantedData:Course[] = [];
for(let course of courseData){
    if((course.students >= minStudents) && course.isPublished){
        wantedData.push(course)
    }
}
return  wantedData;
};


const pluckValues  = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const newArr: T[K][] = []

    for(let obj of items){
        newArr.push(obj[key])
    }
    return newArr
};



class Employee {
  constructor(
    protected name: string,
    private baseSalary: number
  ) {
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee{
  constructor(name:string, baseSalary:number, private department:string){
    super(name, baseSalary)
  }
  getRoleInfo():string {
    return `Manager of ${this.department}: ${this.name}`
  }
};


const validateAgeAsync = async(age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if(age >= 18){
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000);
    }else {
        reject( new Error ("Access Denied: Must be 18 or older"))
    }

  });
};