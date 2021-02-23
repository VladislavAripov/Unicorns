const PAstr = 'productAbout';
const PCstr = 'productChar';
const DAstr = 'deliveryAbout';

const PAtextBlockStr = 'textBlockAbout';
const PCtextBlockStr = 'textBlockChar';
const DAtextBlockStr = 'textBlockDelivery';

const hiden = 'hidenBlock';
const selected = 'selectedBlock';

var PA = document.getElementById(PAstr);
var PC = document.getElementById(PCstr);
var DA = document.getElementById(DAstr);

var PAtextBlock = document.getElementById(PAtextBlockStr);
var PCtextBlock = document.getElementById(PCtextBlockStr);
var DAtextBlock = document.getElementById(DAtextBlockStr);

var isCurrentBlockStr = PAstr;
var isCurrentTextBlockStr = PAtextBlockStr;


PA.onmousedown = function(e) {
    if (isCurrentBlockStr != PAstr)
    {
        var localBlock = document.getElementById(isCurrentBlockStr);
        var localTextBlock = document.getElementById(isCurrentTextBlockStr);

        localBlock.classList.remove(selected);
        localTextBlock.classList.add(hiden);

        PA.classList.add(selected);
        PAtextBlock.classList.remove(hiden);

        isCurrentBlockStr = PAstr;
        isCurrentTextBlockStr = PAtextBlockStr;
    }
}

PC.onmousedown = function(e) {
    if (isCurrentBlockStr != PCstr)
    {
        var localBlock = document.getElementById(isCurrentBlockStr);
        var localTextBlock = document.getElementById(isCurrentTextBlockStr);

        localBlock.classList.remove(selected);
        localTextBlock.classList.add(hiden);

        PC.classList.add(selected);
        PCtextBlock.classList.remove(hiden);

        isCurrentBlockStr = PCstr;
        isCurrentTextBlockStr = PCtextBlockStr;
    }
}

DA.onmousedown = function(e) {
    if (isCurrentBlockStr != DAstr)
    {
        var localBlock = document.getElementById(isCurrentBlockStr);
        var localTextBlock = document.getElementById(isCurrentTextBlockStr);

        localBlock.classList.remove(selected);
        localTextBlock.classList.add(hiden);

        DA.classList.add(selected);
        DAtextBlock.classList.remove(hiden);

        isCurrentBlockStr = DAstr;
        isCurrentTextBlockStr = DAtextBlockStr;
    }
}