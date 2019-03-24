else if (
    sidea !== sideb && 
    sideb !== sidec && 
    sidec !== sidea && 
    sidea + sideb > sidec && 
    sideb + sidec > sidea && 
    sidea + sidec > sideb
) {
    alert("Scalene")
}
else {
    alert("Not a definate triangle")
}