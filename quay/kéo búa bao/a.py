import random as ran

print('Hello ban da den tro choi keo bua bao')
a = input('Ten ban la:')
print('-------------------------------------')
ban = 0;
def xuli(chon1, computer):
	if computer == chon1:
		return 'Draw' # Draw la hoa
	elif computer == 0:
		if chon1 == 1:
			return 'Win' # thang
		else:
			return 'Lose' # thua
	elif computer == 1:
		if chon1 == 2:
			return 'Win' # thang
		else:
			return 'Lose' # thua
	elif computer == 2:
		if chon1 == 0:
			return 'Win' # thang
		else:
			return 'Lose' # thua
while True:
	chon = input(a + ' chon:')
	if chon == 'Exit':
		break;
	elif chon == 'Keo' or chon == 'Bua' or chon == 'Bao' :
		computer1 = ran.randint(0, 2)
		if computer1 == 0:
			com = 'Keo'
		elif computer1 == 1:
			com = 'Bua'
		else:
			com = 'Bao'
		if chon == 'Keo':
			ban = 0
		elif chon == 'Bua':
			ban = 1
		else:
			ban = 2
		print('-------------------------------------')
		print(a + ' chon: ' + chon)
		print('Computer chon: ' + com)
		print(a + ' ' + xuli(ban, computer1)) #ham xu ly va dua ra ket qua
		print('-------------------------------------')
	else:
		print('-------------------------------------')
		print('Day khong phai la Keo Bua Bao') #ok vay la bien tu chu thanh so cho de dung
		print('-------------------------------------')
		# ok xong thank ban da xem