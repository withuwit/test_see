# 1. ฟังก์ชันคำนวณง่ายๆ
def calculate_area(radius):
    import math
    return math.pi * (radius ** 2)

# 2. การรับค่าและแสดงผล (ผ่าน Terminal)
try:
    radius_input = float(input("กรอกรัศมีวงกลม: "))
    area = calculate_area(radius_input)
    print(f"พื้นที่วงกลมคือ: {area:.2f}")
except ValueError:
    print("กรุณากรอกตัวเลขเท่านั้น")