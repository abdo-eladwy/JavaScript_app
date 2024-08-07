let InheritanceValue = +window.prompt("Enter the inheritance value");
let Wife = window.confirm("Did you have a wife ?");
let MaleNum = +window.prompt("number of males");
let FemaleNum = +window.prompt("number of females");
let WifeRight = 0.125 * InheritanceValue;
let TrueValue = InheritanceValue - 0.125 * InheritanceValue;
let divition = TrueValue / (FemaleNum + MaleNum * 2);
let MaleRight = divition * 2;
let FemaleRight = divition;

if (Wife == true) {
  if (MaleNum == 0) {
    MaleRight = 0;
    console.log(
      `wife will take ${WifeRight}   There aren't Males  female will take ${FemaleRight}`
    );
  } else {
    if (FemaleNum == 0) {
      console.log("there arent females");
      FemaleRight = 0;
      console.log(
        `wife will take ${WifeRight}   There aren't females  male will take  ${MaleRight}   `
      );
    } else {
      console.log(
        `wife will take ${WifeRight}   male will take  ${MaleRight}   female will take ${FemaleRight}`
      );
    }
  }
}
 else {
  WifeRight = 0;
  // WifeRight=0
  TrueValue = InheritanceValue;
  divition = InheritanceValue / (FemaleNum + (MaleNum * 2));
  MaleRight = divition*2
  FemaleRight = divition

  console.log(
    `there isn't wife  male will take  ${MaleRight}   female will take ${FemaleRight}`
  );
}
