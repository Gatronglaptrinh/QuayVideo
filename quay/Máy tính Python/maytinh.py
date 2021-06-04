# hello mọi người đã đến với kênh gà trống lập trình
# mình là gà trống
# hôm nay mình sẽ làm máy tính bằng tkinter

import tkinter as tk
# vay la ok
window = tk.Tk()
# tao cua so phan mem
window.title('Máy tính')
def onclick(this):
	if this == '0' or this == '1' or this == '2' or this == '3' or this == '4' or this == '5' or this == '6' or this == '7' or this == '8' or this == '9':
		if entry.text ==  '0':
			entry.text = this
		else:
			entry.text += this
	if this == '+' or this == '-' or this == '*' or this == '/':
		entry.text += this
# luu y binh thuong python ko duoc dung tieng viet nhan thu vien tkinter co ho tro tieng viet nen moi nguoi dung go tieng viet
# tiep tao nut va o nhap du lieu
entry = tk.Entry(window, width=60, font=('Times New Roman',16,'bold'), text='0').grid(column=0, row=0, columnspan=4) # 4 *5 = 20; 60 / 4 = 15
b1 = tk.Button(text="7",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("7")).grid(column=0, row=1)
b2 = tk.Button(text="8",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("8")).grid(column=1, row=1)
b3 = tk.Button(text="9",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("9")).grid(column=2, row=1)
b4 = tk.Button(text="/",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("/")).grid(column=3, row=1)
b5 = tk.Button(text="4",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("4")).grid(column=0, row=2)
b6 = tk.Button(text="5",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("5")).grid(column=1, row=2)
b7 = tk.Button(text="6",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("6")).grid(column=2, row=2)
b8 = tk.Button(text="*",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("*")).grid(column=3, row=2)
b9 = tk.Button(text="1",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("1")).grid(column=0, row=3)
b10 = tk.Button(text="2",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("2")).grid(column=1, row=3)
b11 = tk.Button(text="3",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("3")).grid(column=2, row=3)
b12 = tk.Button(text="-",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("-")).grid(column=3, row=3)
b13 = tk.Button(text=".",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick(".")).grid(column=0, row=4)
b14 = tk.Button(text="0",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("0")).grid(column=1, row=4)
b15 = tk.Button(text="+/-",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("+/-")).grid(column=2, row=4)
b16 = tk.Button(text="+",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("+")).grid(column=3, row=4)
b17 = tk.Button(text="C",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("C")).grid(column=0, row=5)
b18 = tk.Button(text="CE",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("CE")).grid(column=1, row=5)
b19 = tk.Button(text="<--",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("<--")).grid(column=2, row=5)
b20 = tk.Button(text="=",width=10, height=3, font=('Times New Roman', 16, 'bold'), command=lambda:onclick("=")).grid(column=3, row=5)
window.mainloop()
# ok thu
# ok thanh cong

#tam biet
