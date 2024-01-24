const company = document.getElementById('company');
const features = document.getElementById('features');
const featureOps = document.getElementById('featureOps');
const companyOps = document.getElementById('companyOps');


features.addEventListener('click', () => {
    featureOps.classList.toggle('hide');
    companyOps.classList.add('hide');
});

company.addEventListener('click',() =>{
    companyOps.classList.toggle('hide');
    featureOps.classList.add('hide');
});