$('#mytab').tabs({
	collapsible: true,
	event: 'mousedown'
});
$('#mydialog').dialog({
	autoOpen: false,
	width: 'auto'
});
function caculator(type) {
	if (type == 'a') {
	document.getElementById('mydialog').innerHTML = `<table>
			<tr>
				<td colspan='5'><input type="text" id="inra"></td>
			</tr>
			<tr>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="1"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="2"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="3"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="+"></td>
				<td><input type="button" id="btn" onclick="inra.value = ''" class="btn" value="CE"></td>
			</tr>
			<tr>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="4"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="5"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="6"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="-"></td>
				<td><input type="button" id="btn" onclick="inra.value = inra.value.substr(0,inra.value.length-1)" class="btn" value="DEL"></td>
			</tr>
			<tr>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="7"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="8"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="9"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="*"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="."></td>
			</tr>
			<tr>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="("></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="0"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value=")"></td>
				<td><input type="button" id="btn" onclick="inra.value += this.value" class="btn" value="/"></td>
				<td><input type="button" id="btn" onclick="inra.value = eval(inra.value)" class="btn" value="="></td>
			</tr>
		</table>`
}
	if (type == 'b') {
		document.getElementById('mydialog').innerHTML = `<table>
        <tr>
            <td colspan="7"><input type="text" id="inra"></td>
        </tr>
        <tr>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.pow(inra.value, hotro.value)" value="x^y"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.pow(inra.value, 2)" value="x^2"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.sqrt(inra.value)" value="x"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.abs(inra.value)" value="|x|"></td>
            <td><input type="button" id="btn" onclick="inra.value += '3.14'" value="pi"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.ceil(ketquacu.value)" value="ceil"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.floor(ketquacu.value)" value="floor"></td>
        </tr>
        <tr>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="7"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="8"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="9"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="/"></td>
            <td><input type="button" id="btn" onclick="inra.value = inra.value.substr(0,inra.value.length-1)" value="DEL"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.pow(inra.value, -1)" value="x^-1"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.pow(inra.value, 1 / hotro.value)" value="xy"></td>
        </tr>
        <tr>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="4"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="5"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="6"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="*"></td>
            <td><input type="button" id="btn" onclick="inra.value = ''" value="C"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = Math.pow(inra.value, 1 / -1)" value="x1"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = ''" value="A"></td>
        </tr>
        <tr>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="3"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="2"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="1"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="+"></td>
            <td><input type="button" id="btn" onclick="inra.value = '', ketquacu.value= '', hotro.value= ''" value="ACE"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value += +" value="(+x)"></td>
            <td><input type="button" id="btn" onclick="inra.value += '-'" value="(-x)"></td>
        </tr>
        <tr>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="("></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="0"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value=")"></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="-"></td>
            <td><input type="button" id="btn" onclick="ketquacu.value = eval(inra.value)" value="="></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="."></td>
            <td><input type="button" id="btn" onclick="inra.value += this.value" value="*10"></td>
        </tr>
        <tr>
            <td colspan="3"><input type="text" id="hotro"></td>
            <td colspan="4"><input type="text" id="ketquacu"></td>
        </tr>
   </table>
   <table>
        <tr>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="1"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="2"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="3"></td>
           <td><input type="button" id="btn" onclick="ketquacu.value = Math.sin(inra.value)" value="SIN"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="cm->m"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="kg->tấn"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="m3->km3"></td>
        </tr>
        <tr>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="4"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="5"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="6"></td>
           <td><input type="button" id="btn" onclick="ketquacu.value = Math.cos(inra.value)" value="COS"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="m->km"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="cm2->m2"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="cm3->ml"></td>
        </tr>
        <tr>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="7"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="8"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="9"></td>
           <td><input type="button" id="btn" onclick="ketquacu.value = Math.tan(inra.value)" value="TAN"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="cm->inch"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="m2->hm2"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="dm3->l"></td>
        </tr>
        <tr>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="."></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="0"></td>
           <td><input type="button" id="btn" onclick="hotro.value = ''" value="E"></td>
           <td><input type="button" id="btn" onclick="ketquacu.value = Math.log(inra.value)" value="LOG"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="g->kg"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="m2->km2"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="mm->cm"></td>
        </tr>
        <tr>
           <td><input type="button" id="btn" onclick="hotro.value =hotro.value.substr(0,hotro.value.length-1) " value="DEL"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="-"></td>
           <td><input type="button" id="btn" onclick="hotro.value += this.value" value="+"></td>
           <td><input type="button" id="btn" onclick="ketquacu.value = Math.cosh(inra.value)" value="COSH"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="kg->tạ"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="cm3->m3"></td>
           <td><input type="button" id="btn" onclick="hotro.value = this.value, doi()" value="kg->yến"></td>
        </tr>
   </table>`
	}
	$('#mydialog').dialog('open');
}