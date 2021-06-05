// ý tưởng là mình sẽ tạo 
// <!--                <div class="todo-item">
//                         <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, numquam!</li>
//                         <button class="tick"><i class="fas fa-check"></i></button>
//                         <button class="trash"><i class="fas fa-trash"></i></button>
//                     </div>
// khi mình tạo 1 công việc thì tạo 1 class todo-item với 1 li và 2 button trong đó

// khai báo
const todolistinput=document.querySelector('.todolist-input')
const submitbtn=document.querySelector('.todolist-button')
const todolist=document.querySelector('.todolist ul')
const donelist=document.querySelector('.todolist-done ul')
const clearbtn=document.querySelector('.clear')

//các event sự kiện
submitbtn.addEventListener('click',addwork)
clearbtn.addEventListener('click',function(){
    localStorage.clear();
    location.reload();
})
todolist.addEventListener('click',action);
donelist.addEventListener('click',action);
document.addEventListener('DOMContentLoaded',loadtodolist)

// Khai báo một số hàm
// Create item --> tạo 1 item khi thêm công việc
function createitem(list,item){
    // ở đây mình truyền vào list và item vì list để biết nó thuộc done list hay todolist để tí load dữ liệu lên
    // mình createitem theo nhóm đó
    // còn item ở đây thực chất là nội dung công việc vdu: đi làm đi chơi :)) đặt tên hơi củ chuối

    // tạo 1 li và 2 button
    const todoitemli=document.createElement('li');
    const todoitemclickbtn=document.createElement('button');
    const todoitemtrashbtn=document.createElement('button');
    // add content cho li
    todoitemli.innerText=item
    // add class cho button
    todoitemclickbtn.classList.add('tick');
    todoitemclickbtn.innerHTML='<i class="fas fa-check"></i>';
    todoitemtrashbtn.classList.add('trash');
    todoitemtrashbtn.innerHTML='<i class="fas fa-trash"></i>';
    // create todo-item
    const todoitem=document.createElement('div');
    todoitem.classList.add('todo-item');
    // xem nó thuộc list nào thì cho vào list đó
    // nếu thuộc done list thêm class done để có css .done ko hiện dấu tích lên nha
    if(list=='donelist'){
        donelist.appendChild(todoitem);
        todoitem.classList.add('done');
    }else todolist.appendChild(todoitem);
    // thêm li và 2 btn và todo-item div
    todoitem.appendChild(todoitemli);
    todoitem.appendChild(todoitemclickbtn);
    todoitem.appendChild(todoitemtrashbtn);
}
function addwork(){
    // thì khi mình nhấn vào nút mình add work nên phải tạo 1 cái event
    // ok đã vào nhưng các bạn thấy nó bị load lại trang đúng k
    // do event submit của form
    event.preventDefault();//thêm vào để chặn lại cái việc đó
    if(todolistinput.value=='')return;//nếu mình chưa nhập gì thì thoát khỏi hàm lun
    createitem('todolist',todolistinput.value) //bỏ cái nội dung mình nhập tạo 1 cái add vào todolist
    save('todolist',todolistinput.value)//save rồi mới cho nó ='' nhé
    todolistinput.value=''; // dòng này để xóa cái input sau khi ad 
}
// tiếp theo sau khi add mình cần phải lưu nó lại
function save(list,item){
    let templist;
    if(localStorage.getItem(list)===null)templist=[];
    else templist=JSON.parse(localStorage.getItem(list));
    templist.push(item);
    localStorage.setItem(list,JSON.stringify(templist));
}
// ok nhé sẵn mình làm hàm xóa luôn nhén để tí xài nó cxung tuwont tự
function del(list,item){
    let templist;
    if(localStorage.getItem(list)===null)return;
    else templist=JSON.parse(localStorage.getItem(list));
    let index=templist.indexOf(item);
    if(index>-1){
        templist.splice(index,1);
    }//mấy dòng này là tìm vị trí rồi xóa nó khỏi mảng còn lại tương tự như save nha
    //vì mình làm đơn giản nên không check trung hay thêm nhiều điều kiện khác mấy bạn có thể tự custom lại
    localStorage.setItem(list,JSON.stringify(templist));
}
//tiếp theo mình làm bắt phím tích và phím thùng rác nhe
function action(e){
    // cả hai list đều xài chung 1 func nhé
    const item=e.target.parentElement;
    const value=item.querySelector('li');
    // ở đây mình bắt xem nó click vào nút nào và tí nữa lập trình cho nó nhé giờ test thử
    if(e.target.classList[0]==="trash"){
        item.style.opacity='0';
        item.style.transform="scale(0.5)"//thêm 1 số hiệu ứng màu mè
        if(item.classList.contains('done'))
        del('donelist',value.innerText);
        else del('todolist',value.innerText);
        // vì sao nó lại vậy vì mình có hai cái list phân biệt với nhau bằng class done
        // done list thì sẽ có thêm class done nhé
        // thì mình sẽ dùng hàm del và xóa nó đúng với cái list của nó
        item.addEventListener('transitionend',function(){
            item.remove();
        })//sau khi đợi hết hiệu ứng rồi mình mới remove chứ k là k kịp thấy hiệu ứng màu mè :)

    }else if(e.target.classList[0]==="tick"){
        //các bạn nhớ lại lúc đầu video mình có add cả hai list bên list done sẽ k có nút tick nhé
        //vậy khi click vào nút tick mình thêm class done để cho nó thành item bên done list
        item.classList.add('done');
        del('todolist',value.innerText);
        save('donelist',value.innerText);
        // xóa bên mảng todo để nó dịch qua mảng kia
        item.style.opacity='0';
        item.style.transform="translateX(100%)";
        item.addEventListener('transitionend',function(){
            donelist.appendChild(item);
            //sau khi hết hiệu ứng thì mình add item này qua bên donelist
            item.style.opacity='1';
            item.style.transform="translateX(0)";
        })
    }
}
//vậy là gần xong còn 1 cái cuối cùng đó là load dữ liệu lại sau khi f5
function loadtodolist(){
    let loadtodolist;
    if(localStorage.getItem('todolist')===null)loadtodolist=[];
    else loadtodolist=JSON.parse(localStorage.getItem('todolist'));
    loadtodolist.forEach(function(item){
        createitem('todolist',item);
    })
    //mình chỉ việc lấy storage ra như save với del nhưng với mỗi phần tử tỏng array mình tạo nó thành
    // 1 cái todo-item
    let loaddonelist;
    if(localStorage.getItem('donelist')===null)loaddonelist=[];
    else loaddonelist=JSON.parse(localStorage.getItem('donelist'));
    loaddonelist.forEach(function(item){
        createitem('donelist',item);
    })
}