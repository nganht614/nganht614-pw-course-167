const height = 135;
let maxWeight = 0;
let minWeight = 0;
let weight = 0;
if (height > 100 && height < 200) {
    maxWeight = height - 100;
    weight = maxWeight * 9 / 10 ;
    minWeight = maxWeight * 8 / 10;
    console.log("Cân nặng tối đa:",maxWeight, "Cân nặng tối thiểu:", minWeight, "Cân nặng lý tưởng:",weight );
}
else console.log("Không áp dụng công thức tính");