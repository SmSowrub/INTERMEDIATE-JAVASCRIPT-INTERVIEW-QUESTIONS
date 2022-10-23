const Students=[
    {Id:12, Name:'Hasun'},
    {Id:21, Name:'Sowrub'},
    {Id:23, Name:'Nazmul'},
];

const Student1=Students.map(S => S.Name);
const Student2=Students.map(S=> S.Id);
const Student3=Students.filter(S => S.Id > 20);
const Student4=Students.find(s=> s.Id>20);

console.log(Student4);