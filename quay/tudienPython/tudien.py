# hello mọi người hôm nay mình sẽ làm từ điển đơn giản bằng python
# mình xin phép đặt tên tiếng việt
# quên rồi phải lên google
cactukhoa = {
	'home': 'ngoi nha',
	'baby': 'em be',
	'game': 'tro choi',
	'programmer': 'lap trinh vien',
	'programme': 'chuong trinh',
	'chicken': 'thit ga',
	'Thailand': 'thai lan'
}
hoatdong = True # biến cho biến chương trình có đang hoạt động
# hàm trang chu
def Hienthitrangchu():
	print('------------------------------------------')
	print('Hello moi nguoi da den voi tu dien cua toi') # thới quen của mình khi lập trình js
	print('------------------------------------------')
	print('0. thoat chuong trinh') # thay doi mot chut
	print('1. tim tu')
	print('2. xem tat ca tu')
# sơ sơ là được rồi
def find():
	print('Hay nhap tu nghia tieng anh')
	tukhoa = input('Tu khoa la: ')
	if tukhoa in cactukhoa:
		print('Tu khoa tieng viet la %s' % (cactukhoa[tukhoa]))
	else:
		print('Khong tim thay tu %s' % (tukhoa))
def show():
	print('Day la danh sach cac tu khoa hien co trong tu dien nay')
	for tukhoa, nghia in cactukhoa.items():
		print('%s : %s' % (tukhoa, nghia)) # ok
while hoatdong:
	Hienthitrangchu()
	tukhoa = int(input('Ban muon lam gi: '))
	if tukhoa == 0:
		hoatdong = False
	elif tukhoa == 1:
		find();
	elif tukhoa == 2:
		show();
print('Hen gap lai ^-^')
# phải nhấp phím Shift và bấm chuột phải
# ok
# ok xong nha nho like va dang ky cho minh nhe