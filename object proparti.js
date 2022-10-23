const Students=[
    {Id:22, Name:'Hasun'}
    {Id:21, Name:'Sowrub'}
    {Id:23, Name:'Nazmul'}
]

const result=[];
for (let i = 0; i < Students.length; i++) {
    const element = Students[i];
    const  Names = element.Name;
    result.push(Names);


}